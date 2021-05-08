// 入口js
import React from "react";
import reactDom from "react-dom";

import App from './App';

// 将App组件标签渲染到index页面的div上
reactDom.render(<App/>,document.getElementById('root'))