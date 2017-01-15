var express = require('express');
var router = express.Router();
var blocktrail = require('blocktrail-sdk');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('blocktrails', {
        title: 'blocktrails'});
});
client = blocktrail.BlocktrailSDK({apiKey: "e79896038955629acb578374486f0fda479164a5", apiSecret: "4bee878f24d89390ba9d3d8d4effeb2af5c05529", network: "BTC", testnet: false});

client.address('1NcXPMRaanz43b1kokpPuYDdk6GGDvxT2T',
    function(err, address) { console.log(address.balance); });
client.blockLatest(
    function(err, block) { console.log(block.hash); });

/*client.block(0,
 function(err, block) {});
 client.block('0000000000000000fa0b2badd05db0178623ebf8dd081fe7eb874c26e27d0b3b',
 function(err, block) {});


 client.blockTransactions(0,
 function(err, blockTxs) {});
 client.block_transactions('0000000000000000fa0b2badd05db0178623ebf8dd081fe7eb874c26e27d0b3b',
 function(err, blockTxs) {});
 */

//client.blockLatest(function(err, latestBlock) { console.log(latestBlock) });


module.exports = router;