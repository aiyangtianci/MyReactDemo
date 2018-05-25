import React from 'react';
import {AppRegistry} from 'react-native'; // 各种包一定要注意导入

import rootApp from './rootApp'

// 注意，这里用引号括起来的''必须和你package.json文件创建的项目名一致
AppRegistry.registerComponent('MyReactDemo', () => rootApp); //启动rootApp