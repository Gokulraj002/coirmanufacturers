import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Spin } from "antd";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Stylesheet/contact.css";

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 20 },
};

function Contactus() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    console.log("Success:", values);

    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: "376e32ec-c54c-4557-8c5a-1c53b35c45d9",  // Replace with your Web3Forms access key
        name: values.name,
        email: values.email,
        message: values.message,
        contact: values.contact,
      });

      if (response.status === 200) {
        message.success("Message sent successfully!");
        form.resetFields();
      } else {
        message.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      message.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const email = 'abcoirmart@gmail.com';

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="pt-3">
        <p className="text-center my-3 h2" data-aos="zoom-in" style={{ color: "#493112" }}>
          Contact Us
        </p>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="d-flex px-3">
              <div className="px-2">
                <img src="location.png" alt="Location" />
              </div>
              <div className="pt-2 ">
                <span className="h4 contact-title">Our Office Address</span>
                <p className="contact-info">
                  A. B. COIR MART, 5/30B, MVS NAGAR, THALAVAIPATTY, SALEM-636302, TAMIL NADU, INDIA
                </p>
              </div>
            </div>
            <div className="d-flex p-3">
              <div className="px-2">
                <img src="mail.png" alt="Mail" />
              </div>
              <div className="pt-2">
                <span className="h4 contact-title">General Enquiries</span>
                <p className="contact-info" onClick={handleClick}>abcoirmart@gmail.com</p>
              </div>
            </div>
            <div className="d-flex p-3">
              <div className="px-2">
                <img src="call.png" alt="Call" />
              </div>
              <div className="pt-2">
                <span className="h4 contact-title">Call Us</span>
                <p className="contact-info">+91 9787118836</p>
              </div>
            </div>
            <div className="d-flex p-3">
              <div className="px-2">
                <img src="clock.png" alt="Timing" />
              </div>
              <div className="pt-2">
                <span className="h4 contact-title">Our Timing</span>
                <p className="contact-info">Mon-Sat : 09:00 AM - 07:00 PM</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="px-3">
              <Form
                {...layout}
                form={form}
                name="basic"
                layout="horizontal"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                requiredMark={false}
                colon={false}
                className="fw-bold"
              >
                <div>
                  <label htmlFor="">Name</label>
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please enter your name!" },
                      {
                        pattern: /^[a-zA-Z]{1,20}$/,
                        message:
                          "Username can only contain letters and must be up to 20 characters long!",
                      },
                    ]}
                  >
                    <Input placeholder="YOUR NAME" className="form-control " />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="">Email</label>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email!" },
                      {
                        pattern:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "The input is not a valid email!",
                      },
                    ]}
                  >
                    <Input placeholder="YOUR EMAIL" className="form-control" />
                  </Form.Item>
                </div>
                <div>
                  <label htmlFor="">Contact</label>
                  <Form.Item
                    name="contact"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your contact number!",
                      },
                      {
                        len: 10,
                        message: "Contact number must be exactly 10 digits!",
                      },
                      {
                        pattern: /^\d{10}$/,
                        message: "Contact number must be numeric!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="YOUR CONTACT NO"
                      className="form-control"
                    />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="">Message</label>
                  <Form.Item
                    name="message"
                    rules={[
                      { required: true, message: "Please enter your message!" },
                    ]}
                  >
                    <Input.TextArea
                      placeholder="YOUR MESSAGE"
                      className="form-control"
                    />
                  </Form.Item>
                </div>

                <div className="d-flex justify-content-center my-3">
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loading}
                      className="submit-btn"
                    >
                      Submit {loading && <Spin size="small" />}
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="p-0 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15629.284431155893!2d78.094715!3d11.67164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babfb00739b115f%3A0xdd28e44cda121c6!2sA%20B%20COIR%20MART!5e0!3m2!1sen!2sin!4v1719561332461!5m2!1sen!2sin"
          height="350"
          className="w-100"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contactus;
