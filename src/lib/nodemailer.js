import nodemailer from 'nodemailer';

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('Error with email configuration:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Function to send order confirmation email
export const sendOrderConfirmationEmail = async (order, userEmail) => {
  try {
    // Format order items for email
    const itemsHtml = order.items.map(item => `
      <div class="item">
        <span>${item.productId?.name || 'Product'} x ${item.quantity}</span>
        <span>₹${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');

    const mailOptions = {
      from: `"Tarabhai's E-cart" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: `Order Confirmation - ${order.orderId}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #c6405dff; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .order-details { margin-bottom: 20px; }
            .item { display: flex; justify-content: space-between; margin-bottom: 10px; }
            .total { font-weight: bold; border-top: 1px solid #ddd; padding-top: 10px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Order Confirmed!</h1>
              <p>Thank you for your purchase</p>
            </div>
            <div class="content">
              <h2>Order Details</h2>
              <p><strong>Order ID:</strong> ${order.orderId}</p>
              <p><strong>Order Date:</strong> ${new Date(order.createdAt).toLocaleDateString()}</p>
              
              <h3>Shipping Address</h3>
              <p>${order.address.name}<br>
              ${order.address.street}<br>
              ${order.address.city}, ${order.address.state} ${order.address.zipCode}<br>
              ${order.address.country}</p>
              
              <h3>Order Items</h3>
              ${itemsHtml}
              
              <div class="total">
                <div class="item">
                  <span>Subtotal:</span>
                  <span>₹${order.subtotal.toFixed(2)}</span>
                </div>
                <div class="item">
                  <span>Shipping:</span>
                  <span>₹${order.shipping.toFixed(2)}</span>
                </div>
                <div class="item">
                  <span>Tax:</span>
                  <span>₹${order.tax.toFixed(2)}</span>
                </div>
                <div class="item">
                  <span>Total:</span>
                  <span>₹${order.total.toFixed(2)}</span>
                </div>
              </div>
              
              <p>We'll notify you when your order ships.</p>
            </div>
            <div class="footer">
              <p>If you have any questions, contact us at support@yourstore.com</p>
              <p>© ${new Date().getFullYear()} Your Store Name. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Order confirmation email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default transporter;