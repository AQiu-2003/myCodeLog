## 简单的 EventListener

你要实现一个简单的事件监听器内核，分为两个部分

### 1. 监听器部分

允许下游程序根据 id 创建监听器，在收到对应时间时回调，同时支持移除

```js
// 新增监听器
const listener = EventBus.addListener('YourKey', (pass) => {
  // ...Things after callback

  // 移除监听器
  listener.remove();
});
```

### 2. 事件接收部分

```js
// 广播事件
EventBus.emit('YourKey', payload);
```

你需要实现的东西：

```js
class EventBus {
    // Your Code
}
```

My solution: [EventBus.ts](./eventListener.js)

## 防止湖水溢出

> [LeetCode](https://leetcode.cn/problems/avoid-flood-in-the-city/description/)

你的国家有无数个湖泊，所有湖泊一开始都是空的，当第 $n$ 个湖泊下雨的时候，如果第 $n$ 个湖泊是空的，那么它就会装满水，否则这个湖泊就会发生洪水。你的目标是避免任意一个湖泊发生洪水。

给你一个整数数组 $rains$ ，其中：

- $rains[i] > 0$ 表示第 $i$ 天时，第 $rains[i]$ 个湖泊会下雨。
- $rains[i] == 0$ 表示第 $i$ 天没有湖泊会下雨，你可以选择一个湖泊并 抽干 这个湖泊的水。

请返回一个数组 $ans$ ，满足：

- $ans.length == rains.length$
- 如果 $rains[i] > 0$ ，那么 $ans[i] == -1$ 。
- 如果 $rains[i] == 0$ ， $ans[i]$ 是你第 $i$ 天选择抽干的湖泊。

如果有多种可行解，请返回它们中的任意一个。如果没有办法阻止洪水，请返回一个空的数组。

请注意，如果你选择抽干一个装满水的湖泊，它会变成一个空的湖泊。但如果你选择抽干一个空的湖泊，那么将无事发生。

My solution: [avoidFlood.ts](./avoidFlood.ts) （可以使用二分查找优化）
