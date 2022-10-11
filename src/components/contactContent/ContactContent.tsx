import "./ContactStyle.scss";
import { Button, Col, Form, Input, Row } from "antd";
import logoImg from "../../assets/images/logogiuseart.png";
import TextArea from "antd/lib/input/TextArea";
import bannerBot from "../../assets/images/bg-phanhoi.jpg";
import sliderImg from "../../assets/images/slider.jpg";
function ContactContent() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
  };

  return (
    <>
      <div className="contactContent-header">
        <img src={sliderImg} alt="" />
      </div>
      <div className="contactContent">
        <div className="container">
          <Row gutter={16}>
            <Col span={12} className="formContact-left">
              <div className="formContact-title">IQOS Việt Nam</div>
              <div className="formContact-logo">
                <img src={logoImg} alt="" />
              </div>
              <div className="formContact-list">
                <ul>
                  <li className="location">
                    <span>
                      <strong>Địa chỉ:&nbsp;</strong>36 Lý Nam Đế Cửa Đông, Hoàn
                      Kiếm, Hà Nội
                    </span>
                  </li>
                  <li className="phone">
                    <span>
                      <strong>Điện thoại:&nbsp;</strong>099.419.8888
                    </span>
                  </li>
                  <li className="email">
                    <span>
                      <strong>Email:</strong>&nbsp;iqosvietnam@gmail.com
                    </span>
                  </li>
                  <li className="website">
                    <span>
                      <strong>Website:</strong>&nbsp;iqosstore.com.vn
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col span={12} className="formContact-right">
              <div className="formContact-title field-right">
                Biểu mẫu liên hệ:
              </div>
              <div className="formContact-form">
                <Form
                  name="basic"
                  {...layout}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  autoComplete="on"
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item


                        name="ho_va_ten"
                        rules={[
                          {
                            required: true,
                            message: "Đừng bỏ trông ô này !",
                          },
                        ]}
                        className="formContent-field"
                      >
                        <Input
                          placeholder="Họ tên của bạn"
                          style={{ width: "calc(100% - 32px)" }}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item


                        name="so_dien_thoai"
                        className="formContent-field"
                      >
                        <Input
                          placeholder="Số điện thoại"
                          style={{ width: "calc(100% - 32px)" }}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item


                        name="dia_chi_cua_ban"
                        className="formContent-field"
                      >
                        <Input
                          placeholder="Địa chỉ của bạn"
                          style={{ width: "calc(100% - 32px)" }}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                      
                      name="email" className="formContent-field col-24">
                        <Input
                          placeholder="Địa chỉ Email"
                          style={{ width: "calc(100% - 32px)" }}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                      
                      name="ghi_chu">
                        <TextArea rows={4} placeholder="ghi chú thêm" />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                      
                      wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                          Liên hệ ngay
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="contactContent-footer">
        <img src={bannerBot} alt="" />
        <h2>Hãy đến với chúng tôi để cảm nhận sự khác biệt!</h2>
      </div>
    </>
  );
}

export default ContactContent;
