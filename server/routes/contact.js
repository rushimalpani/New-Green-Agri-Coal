// ──────────────────────────────────────────────────────────
// NOTE: This route is NO LONGER USED.
//
// The contact form now uses Web3Forms (https://web3forms.com)
// which sends emails directly from the client side.
// No backend, no Nodemailer, and no Gmail credentials needed.
//
// You can safely remove this file and its reference in
// your server's main app/index file if you wish.
// ──────────────────────────────────────────────────────────

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.status(410).json({
    message: 'This endpoint has been deprecated. The contact form now uses Web3Forms directly from the client.',
  });
});

module.exports = router;
