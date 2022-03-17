const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const countryValidation = require('../../validations/country.validation');
const countryController = require('../../controllers/country.controller');

const router = express.Router();

router
  .route('/')
  .get(countryController.getCountries)
  .post(auth('manageUsers'), validate(countryValidation.createCountry), countryController.createCountry);

router
  .route('/:countryId')
  .get(countryController.getCountry)
  .patch(auth('manageUsers'), validate(countryValidation.updateCountry), countryController.updateCountry)
  .delete(auth('manageUsers'), validate(countryValidation.deleteCountry), countryController.deleteCountry);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Countries
 *   description: Country management and retrieval
 */

/**
 * @swagger
 * /countries:
 *   post:
 *     summary: Create a country
 *     description: Only admins can create other countries.
 *     tags: [Countries]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name_country
 *               - code
 *             properties:
 *               name_country:
 *                 type: string
 *               code:
 *                 type: string
 *             example:
 *               name_country: Indonesia
 *               code: ID
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Country'
 *       "400":
 *         $ref: '#/components/responses/DuplicateCode'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all country
 *     description: Only admins can retrieve all country.
 *     tags: [Countries]
 *     parameters:
 *       - in: query
 *         name: name_country
 *         schema:
 *           type: string
 *         description: Name Country
 *       - in: query
 *         name: code
 *         schema:
 *           type: string
 *         description: Code Country
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of Country
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Country'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /countries/{id}:
 *   get:
 *     summary: Get a country
 *     description:
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: country id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Country'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Country
 *     description:
 *     tags: [Countries]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Country id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name_country:
 *                 type: string
 *               code:
 *                 type: string
 *             example:
 *               name_country: Indonesia
 *               code: ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Country'
 *       "400":
 *         $ref: '#/components/responses/DuplicateCode'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Country
 *     description:
 *     tags: [Countries]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Country id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
