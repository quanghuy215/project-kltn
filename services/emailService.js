require('dotenv').config();
//import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer');

let sendEmail = async (dataUser, dataCart, dataAddress) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_APP, // generated ethereal user
      pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
    },
  });
  //get sum price on dataCart
  let sum = 0; //sum of price
  for (let i = 0; i < dataCart.length; i++) {
    sum += dataCart[i].price * dataCart[i].quantity;
  }
  //get sum price on dataCart

  //get infor product on dataCart : name, quantity
  let inforProduct = '';
  for (let i = 0; i < dataCart.length; i++) {
    inforProduct +=
      '<b>Sản phẩm: ' +
      dataCart[i].title +
      ' - Số lượng: ' +
      dataCart[i].quantity +
      '<br/></b>';
  }
  //get infor product on dataCart : name, quantity

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Lend Shop👻" <nghary215@gmail.com>', // sender address
    to: dataUser.email, // list of receivers
    subject: 'Thông tin đặt hàng Lend Shop', // Subject line
    html: `
    <h3>Xin chào ${dataUser.name}!</h3>
    <p>Bạn đã nhận được email vì đặt hàng online ở Lend Shop</p>
    <p>Thông tin đặt hàng của bạn: </p>
    <div>
        <b>Số sản phẩm: ${dataCart.length} <br></b>
        <b>Địa điểm: ${dataAddress.line1} , ${dataAddress.city} , ${dataAddress.state} <br></b>
        ${inforProduct}
        <b>Tổng tiền: $${sum}</b>
    </div>
    <p>Nếu các thông tin trên là không đúng sự thật, vui lòng phản hồi mail để nhận được sự hỗ trợ kịp thời</div>
    <div>Xin chân thành cảm ơn</div>
    `, // html body
  });
};

module.exports = {
  sendEmail: sendEmail,
};
