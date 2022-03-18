const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const regionValidation = require('../../validations/region.validation');
const regionController = require('../../controllers/region.controller');

const router = express.Router();

router
  .route('/province')
  .get(regionController.getProvinces)
  .post(auth('manageUsers'), validate(regionValidation.createProvince), regionController.createProvince);
router
  .route('/province/:provinceId')
  .get(regionController.getProvince)
  .patch(auth('manageUsers'), validate(regionValidation.updateProvince), regionController.updateProvince)
  .delete(auth('manageUsers'), validate(regionValidation.deleteProvince), regionController.deleteProvince);

router
  .route('/regency')
  .get(regionController.getRegencies)
  .post(auth('manageUsers'), validate(regionValidation.createRegency), regionController.createRegency);
router
  .route('/regency/:regencyId')
  .get(regionController.getRegency)
  .patch(auth('manageUsers'), validate(regionValidation.updateRegency), regionController.updateRegency)
  .delete(auth('manageUsers'), validate(regionValidation.deleteRegency), regionController.deleteRegency);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Region
 *   description: Region management and retrieval
 */

/**
 * @swagger
 * /region/province:
 *   post:
 *     summary: Create a Province
 *     description: Only admins can create other countries.
 *     tags: [Region]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - kd_province
 *               - name_province
 *             properties:
 *               name_province:
 *                 type: string
 *               kd_province:
 *                 type: string
 *             example:
 *               name_province: Jawa Barat
 *               kd_province: "31"
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Province'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all province
 *     description: Only admins can retrieve all province.
 *     tags: [Region]
 *     parameters:
 *       - in: query
 *         name: name_province
 *         schema:
 *           type: string
 *         description: Name Province
 *       - in: query
 *         name: kd_province
 *         schema:
 *           type: string
 *         description: kd province
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
 *                     $ref: '#/components/schemas/Province'
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
 * /region/province/{id}:
 *   get:
 *     summary: Get a province
 *     description: Logged in province can fetch only their own user information
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: province id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Province'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a province
 *     description: Logged in provinces can only update their own information. Only admins can update other provinces.
 *     tags: [Region]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: province id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               kd_province:
 *                 type: string
 *               name_province:
 *                 type: string
 *             example:
 *               name_province: Jawa Barat
 *               kd_province: 31
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Province'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a province
 *     description: Logged in provinces can delete only themselves. Only admins can delete other provinces.
 *     tags: [Region]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Province id
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

/**
 * @swagger
 * /region/regency:
 *   post:
 *     summary: Create a Regency
 *     description: Only admins can create other countries.
 *     tags: [Region]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_province
 *               - kd_province
 *               - kd_regency
 *               - name_regency
 *             properties:
 *               id_province:
 *                 type: string
 *               kd_province:
 *                 type: string
 *               kd_regency:
 *                 type: string
 *               name_regency:
 *                 type: string
 *             example:
 *                id_province: 5ebac534954b54139806c112
 *                kd_province: "31"
 *                name_regency: Depok
 *                kd_regency: "3111"
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Regency'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Regency
 *     description: Only admins can retrieve all regency.
 *     tags: [Region]
 *     parameters:
 *       - in: query
 *         name: name_regency
 *         schema:
 *           type: string
 *         description: Name Regency
 *       - in: query
 *         name: kd_province
 *         schema:
 *           type: string
 *         description: kd Province
 *       - in: query
 *         name: kd_regency
 *         schema:
 *           type: string
 *         description: kd Regency
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
 *                     $ref: '#/components/schemas/Regency'
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
 * /region/regency/{id}:
 *   get:
 *     summary: Get a regency
 *     description: Logged in regency can fetch only their own user information
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: regency id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Regency'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Regency
 *     description: Logged in Regency can only update their own information. Only admins can update other Regency.
 *     tags: [Region]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Regency id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_province:
 *                 type: string
 *               kd_province:
 *                 type: string
 *               kd_regency:
 *                 type: string
 *               name_regency:
 *                 type: string
 *             example:
 *               id_province: 5ebac534954b54139806c115
 *               kd_province: "31"
 *               kd_regency: Jawa Barat
 *               name_regency: "3111"
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Regency'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a regency
 *     description: Logged in regency can delete only themselves. Only admins can delete other regency.
 *     tags: [Region]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Regency id
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
