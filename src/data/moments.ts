// 说说内容：新增一条记录，只需复制下面一个对象并修改日期和内容。
// date 使用 YYYY-MM-DD；页面会自动按日期倒序显示。
export interface Moment { date: string; text: string; tags?: string[]; }
export const moments: Moment[] = [
  { date: '2026-10-19', text: '今天给自己的博客换了一颗淡紫色的星星。想让这里慢慢长成喜欢的样子。', tags: ['博客', '日常'] },
  { date: '2026-10-18', text: '有些小事不需要写成长文章，记下来就已经很有意义。', tags: ['碎碎念'] },
];
