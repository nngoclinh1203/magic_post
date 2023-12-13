const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController')


router.get('/create_order/create_to_wh_order', employeeController.createShipToWarehouseOrder); 
router.post('/stored/to_wh_order', employeeController.postShipToWarehouseOrder); 
router.get('/create_order/create_to_station_order', employeeController.createShipToStationOrder);
router.post('/stored/to_station_order', employeeController.postShipToStationOrder); 
router.get('/create_order/create_to_receiver_order', employeeController.createShipToReceiverOrder);
router.post('/stored/to_receiver_order', employeeController.postShipToReceiverOrder); 
router.get('/profile/update', employeeController.getUpdateProfile);
router.post('/profile/update/:id', employeeController.postUpdateProfile);
router.get('/confirm_order/confirm_from_wh_to_station', employeeController.getConfirmFromWarehouseToStation); 
router.get('/confirm_order/:containerCode/confirm_each_order_wh_station', employeeController.getConfirmEachOrderFromWarehouseToStation); 
router.post('/stored/confirm_posts_wh_station', employeeController.postConfirmPostsWarehouseToStation); 

module.exports = router;