import React from "react";
import "./App.css";
import VVShare from "vvshare";

function App() {
  return (
    <div className="wrapper">
      <table>
        <tbody>
          <tr>
            <th>全部默认值：</th>
            <td>
              <VVShare />
            </td>
          </tr>
          <tr>
            <th>
              title=测试标题
              <br />
              url=https://github.com/hubcodemke/VVShare?test=1&code=abc
              description=测试描述
              <br />
              image=http://t9.baidu.com/it/u=2268908537,2815455140&fm=79&app=86&f=JPEG?w=1280&h=719
              <br/>
              width= 50
              <br />
              fontSize=20
              <br />
              height=50
            </th>
            <td>
              <VVShare
                title="测试标题"
                url="https://github.com/hubcodemke/VVShare?test=1&code=abc"
                description="测试描述"
                image="http://t9.baidu.com/it/u=2268908537,2815455140&fm=79&app=86&f=JPEG?w=1280&h=719"
                width={50}
                height={50}
                fontSize={20}
              />
            </td>
          </tr>
          <tr>
            <th>圆形，居中，其他默认</th>
            <td>
              <VVShare alignment="center" radius="999em" />
            </td>
          </tr>
        </tbody>
      </table>
      <p>注：url参数还可以通过修改浏览器上面的url参数来测试</p>
    </div>
  );
}

export default App;
