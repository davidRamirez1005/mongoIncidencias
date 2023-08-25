import { check } from 'express-validator';

const validationTrainer = [
  check('nombre_completo').notEmpty().isString().withMessage('el nombre es obligatoriuo y debe ser string'),
  check('email_personal').isEmail().withMessage('el email es obligatoriuo y debe ser string'),,
  check('email_corporativo').isEmail().withMessage('el email es obligatoriuo y debe ser string'),,
  check('telefono_movil').isString().notEmpty().withMessage('es obligatorio'),
  check('telefono_residencia').isString(),
  check('telefono_empresa').isString(),
  check('telefono_movil_empresarial').isString()
];
const validationPc = [
    check('ordenador_codigo').notEmpty().isString().withMessage('el codigo del pc es obligatorio y debe ser string'),
    check('ordenador_codigo_teclado').notEmpty().isString().withMessage('el codigo del teclado es obligatorio y debe ser string'),,
    check('ordenador_codigo_mouse').notEmpty().isString().withMessage('el codigo del mause es obligatoriuo y debe ser string'),,
    check('ordenador_codigo_diadema').notEmpty().isString().notEmpty().withMessage('es obligatorio')
];
const validationIncidencia = [
  check('usu_incidencia.nivel').notEmpty().isInt().withMessage('El nivel es obligatorio y debe ser un número entero'),
  check('usu_incidencia.categoria').notEmpty().isString().withMessage('La categoría es obligatoria y debe ser un string'),
  check('fecha').notEmpty().isDate().withMessage('La fecha es obligatoria y debe ser una fecha válida'),
  check('lugar_incidencia').notEmpty().isString().withMessage('El lugar de incidencia es obligatorio y debe ser un string'),
  check('descripcion').notEmpty().isString().withMessage('La descripción es obligatoria y debe ser un string')
];

export { validationTrainer, validationPc, validationIncidencia };
