# JBTI 3.0 抽题策略设计

## 目标
- 题库扩充到50题
- 每次测试抽取36题（72%的题目）
- 确保抽取的36题能平衡覆盖所有10个维度
- 保持测试的结构完整性（4个部分的比例）

## 维度平衡目标
每个维度在抽取的36题中应出现的目标次数：

| 维度 | 当前36题出现次数 | 目标出现次数 | 说明 |
|------|-----------------|-------------|------|
| mihoyo | 10 | 12-15 | 游戏信仰维度，适当增加 |
| porridge | 10 | 12-15 | 审美维度，适当增加 |
| fake | 14 | 12-15 | 伪装度，保持适中 |
| dragon | 7 | 10-12 | 幻想维度，需要增加 |
| pill | 31 | 15-18 | 当前过高，需要减少 |
| abstract | 36 | 18-22 | 当前过高，需要减少但仍是核心 |
| meme | 5 | 10-12 | 严重不足，需要大幅增加 |
| cringe | 18 | 12-15 | 保持适中 |
| chaos | 32 | 15-18 | 当前过高，需要减少 |
| balance | 53 | 15-20 | 当前严重过高，需要大幅减少 |

## 抽题算法设计

### 1. 题库结构
- 保持4个部分的结构：
  - 第1部分：游戏信仰与审美（12题）
  - 第2部分：抽象网络行为（12题）
  - 第3部分：幻想与现实（13题）
  - 第4部分：终极抽象（13题）
- 总计50题

### 2. 抽题规则
每次测试从50题中抽取36题，规则如下：

1. **按部分比例抽取**：
   - 第1部分：抽取9题（从12题中）
   - 第2部分：抽取9题（从12题中）
   - 第3部分：抽取9题（从13题中）
   - 第4部分：抽取9题（从13题中）

2. **维度平衡约束**：
   - 每个维度在抽取的36题中应出现的次数在目标范围内
   - 使用贪心算法优先选择能平衡维度的题目

3. **随机性保证**：
   - 每次测试的题目组合不同
   - 避免固定模式，增加测试的可重复性

### 3. 算法步骤

```typescript
// 伪代码
function selectQuestions(allQuestions: Question[]): Question[] {
  // 1. 按部分分组
  const part1 = allQuestions.filter(q => q.id <= 12);
  const part2 = allQuestions.filter(q => q.id > 12 && q.id <= 24);
  const part3 = allQuestions.filter(q => q.id > 24 && q.id <= 37);
  const part4 = allQuestions.filter(q => q.id > 37 && q.id <= 50);
  
  // 2. 初始化维度计数器
  const dimensionCounts = initializeDimensionCounts();
  
  // 3. 从每个部分抽取题目
  const selected: Question[] = [];
  
  // 从每个部分抽取，考虑维度平衡
  selected.push(...selectFromPart(part1, 9, dimensionCounts));
  selected.push(...selectFromPart(part2, 9, dimensionCounts));
  selected.push(...selectFromPart(part3, 9, dimensionCounts));
  selected.push(...selectFromPart(part4, 9, dimensionCounts));
  
  // 4. 打乱题目顺序（保持测试流畅性）
  return shuffleQuestions(selected);
}

function selectFromPart(part: Question[], count: number, dimensionCounts: Record<string, number>): Question[] {
  // 使用贪心算法：优先选择能改善维度平衡的题目
  // 计算每个题目对维度平衡的"贡献度"
  // 选择贡献度最高的题目
}
```

## 新题目设计原则

扩充到50题时，新题目应：
1. **弥补维度不足**：重点增加meme、dragon维度的题目
2. **减少过度覆盖**：减少balance、chaos、pill维度的题目
3. **保持趣味性**：延续现有的抽象、玩梗风格
4. **覆盖新话题**：增加社交媒体、AI、元宇宙等新话题

## 兼容性考虑
- v3.0算法：使用新的抽题逻辑
- v2.0算法：仍可使用完整的36题（保持向后兼容）
- 用户可以选择使用完整题库或随机抽取