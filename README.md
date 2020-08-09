# 渐进式 Web 应用（PWA）

## PWA 的优势

- PWA 是可被发现、易安装、可链接、独立于网络、渐进式、可重用、响应性和安全的。

- 一个标准的 Pwa 必须包含
- Https 服务器或者http://localhost
- mainifest.JSON
- service worker

## Web App Manifest

- Web 应用程序清单在一个 JSON 文本文件中提供有关应用程序的信息（如名称，作者，图标和描述）。manifest 的目的是将 Web 应用程序安装到设备的主屏幕，为用户提供更快的访问和更丰富的体验。

- Web 应用程序清单是被称为渐进式 Web 应用程序(PWA)的 Web 技术集合的一部分, 它们是可以安装到设备的主屏幕的网络应用程序，而不需要用户通过应用商店，伴随着其他功能, 比如离线可用和接收推送通知。

- 相关配置 https://developer.mozilla.org/zh-CN/docs/Web/Manifest

## Service worker

- 允许 web 应用在网络环境比较差或者离线的环境下继续使用
- 可以极大的提高用户体验
- 是一个独立的 worker 线程，独立于当前页面进程，是一种特殊的 web worker
- 可以拦截代理请求和返回，缓存图片，缓存文件可以被网页进程读取(包括网络离线状态
- 离线开发内容开发者可控
- 必须在 Https 环境下工作
- 异步实现，内部大部分都是 promise 实现
- 相关 Api https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API

## web worker

- 是脱离主线程之外的，将一些复杂的耗时的活交给它干
- 完成后通过 postmessage 的方法告诉主线程
- web worker 是一个单独的运行环境，不能操作 dom，bom
