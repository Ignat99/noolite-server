Bitpay = require('bitpay-node')
var client = new Bitpay.Client({apiKey: 'bpboVJSmLEbCBYdrIrJzDgHECzDrHclb5zzmxlgC8' });
client.createInvoice({ price: 0.001, currency: 'BTC', notificationURL: 'http://bitpay-yeomen-express-basic.herokuapp.com/payments/9999', transactionSpeed: 'high', fullNotifications: true }, function(err, invoice){console.log(invoice) })
 
