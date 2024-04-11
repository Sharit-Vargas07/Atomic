import { pool } from "../database/conexion.js";
import { validationResult } from 'express-validator';

export const listarInversiones = async (req, res) => {
    try {
        let sql = `SELECT inver.id_inversiones AS id_inversiones,
                            inver.fk_id_programacion AS id_programacion,
                            pro.fecha_inicio,
                            pro.fecha_fin,
                            inver.fk_id_costos AS id_costos,
                            c.precio,
                            inver.total_costos
                    FROM inversiones AS inver
                    JOIN programacion AS pro ON inver.fk_id_programacion = pro.id_programacion
                    JOIN costos AS c ON inver.fk_id_costos = c.id_costos`;
        const [result] = await pool.query(sql);

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(400).json({
                status: 400,
                message: 'No hay ninguna inversión'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error en el servidor: ' + error,
        });
    }
};


export const registrarInversiones = async (req, res) => {
    try {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json({
                errors: error.array()
            });
        }

        const { fk_id_programacion, fk_id_costos } = req.body;

        const [costoExist] = await pool.query('SELECT * FROM costos WHERE id_costos = ?', [fk_id_costos]);

        if (costoExist.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'Id costo no existe. Registre primero un costo.'
            });
        }

        const [loteExist] = await pool.query('SELECT * FROM programacion WHERE id_programacion = ?', [fk_id_programacion]);

        if (loteExist.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'La programación no existe. Registre primero una programación.'
            });
        }

        const [costoInfo] = await pool.query('SELECT precio FROM costos WHERE id_costos = ?', [fk_id_costos]);
        const [tipoRecursoInfo] = await pool.query('SELECT cantidad_medida FROM tipo_recursos WHERE id_tipo_recursos = ?', [fk_id_costos]);

        const precio = costoInfo[0].precio;
        const cantidadMedida = tipoRecursoInfo[0].cantidad_medida;
        const totalCostos = precio * cantidadMedida;

        const [Registrar] = await pool.query('INSERT INTO inversiones (fk_id_programacion, fk_id_costos, total_costos) VALUES (?, ?, ?)', [fk_id_programacion, fk_id_costos, totalCostos]);

        if (Registrar.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se registró correctamente'
            });
        } else {
            res.status(400).json({
                status: 400,
                message: 'Campo obligatorio'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error en el servidor',
            error: error.message
        });
    }
};


export const BuscarInversiones = async (req, res) => {
    try {
        const { id_Inversiones } = req.params;
        const consultar = `SELECT inver.id_inversiones AS id_inversiones,
                                    inver.fk_id_programacion AS id_programacion,  
                                    pro.fecha_inicio, 
                                    pro.fecha_fin,
                                    inver.fk_id_costos AS id_costos,
                                    c.precio
                            FROM inversiones AS inver
                            JOIN costos AS c ON inver.fk_id_costos = c.id_costos 
                            JOIN programacion AS pro ON inver.fk_id_programacion = pro.id_programacion
                            WHERE inver.id_inversiones = ?`;
        const [resultado] = await pool.query(consultar, [id_Inversiones]);

        if (resultado.length > 0) {
            return res.status(200).json(resultado[0]);
        } else {
            res.status(404).json({
                status: 404,
                message: "No se encontraron resultados",
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Error en el servidor",
            error: error.message,
        });
    }
};


export const actualizarInversiones = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() });
        }

        const { id_Inversiones } = req.params;
        const { fk_id_costos, fk_id_programacion } = req.body;

        if (fk_id_costos) {
            const [costoExist] = await pool.query('SELECT * FROM costos WHERE id_costos = ?', [fk_id_costos]);
            if (costoExist.length === 0) {
                return res.status(404).json({
                    status: 404,
                    message: 'Id costo no existe. Registre primero un costo.'
                });
            }
        }

        if (fk_id_programacion) {
            const [programacionExist] = await pool.query('SELECT * FROM programacion WHERE id_programacion = ?', [fk_id_programacion]);
            if (programacionExist.length === 0) {
                return res.status(404).json({
                    status: 404,
                    message: 'La programacion no existe. Registre primero una programacion.'
                });
            }
        }

        const [inversionExist] = await pool.query('SELECT * FROM inversiones WHERE id_inversiones=?', [id_Inversiones]);

        if (inversionExist.length === 0) {
            return res.status(400).json({ status: 400, message: 'Inversion no encontrada.' });
        }

        const updateValues = {
            fk_id_costos: fk_id_costos || inversionExist[0].fk_id_costos,
            fk_id_programacion: fk_id_programacion || inversionExist[0].fk_id_programacion
        };

        const updateQuery = 'UPDATE inversiones SET fk_id_costos=?, fk_id_programacion=? WHERE id_inversiones=?';

        const [result] = await pool.query(updateQuery, [updateValues.fk_id_costos, updateValues.fk_id_programacion, id_Inversiones]);

        if (result.affectedRows > 0) {
            res.status(200).json({
                mensaje: 'Ha sido actualizado.'
            });
        } else {
            res.status(400).json({
                status: 400,
                message: 'No se encontraron resultados para la actualización.'
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Error en el servidor.',
            error: error.message
        });
    }
};