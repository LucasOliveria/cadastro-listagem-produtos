import joi, { Schema } from "joi";

export const productRegisterSchema: Schema = joi.object({
  name: joi.string().trim().required().messages({
    'string.base': 'O campo "name" deve ser uma string.',
    'string.empty': 'O campo "name" não pode estar vazio.',
    'any.required': 'O campo "name" é obrigatório.'
  }),
  description: joi.string().messages({
    'string.base': 'O campo "description" deve ser uma string.'
  }),
  value: joi.number().integer().positive().required().messages({
    'number.base': 'O campo "value" deve ser um número.',
    'number.integer': 'O campo "value" deve ser um número inteiro.',
    'number.positive': 'O campo "value" deve ser um número positivo.',
    'any.required': 'O campo "value" é obrigatório.'
  }),
  available: joi.boolean().required().messages({
    'any.required': 'O campo "available" é obrigatório',
    'boolean.base': 'O campo "available" deve ser um valor booleano.'
  })
});