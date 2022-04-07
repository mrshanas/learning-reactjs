import { Result, Button } from "antd";

const NoPage: React.FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, Page not found"
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

export default NoPage;
