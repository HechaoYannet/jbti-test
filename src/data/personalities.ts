import type { PersonalityType } from './types';
import { personalityTypesV2 } from './personalities_v2';
import { personalityTypesV3 } from './personalities_v3';

// 根据算法版本返回对应的人格类型
export const getPersonalityTypes = (algorithmVersion: 'v2' | 'v3' = 'v3'): PersonalityType[] => {
  return algorithmVersion === 'v2' ? personalityTypesV2 : personalityTypesV3;
};

// 默认导出v3版本（向后兼容）
export const personalityTypes: PersonalityType[] = personalityTypesV3;