import { GET_ARMS } from './../actions/gunfire-actions';

const initialState = {
  gunfire: [
    // {
    //   value: '1',
    //   label: '狙击枪',
    //   children: [
    //     {
    //       label: 'VSS',
    //       value: '1',
    //       disabled: false,
    //     },
    //     {
    //       label: 'SKS',
    //       value: '2',
    //     },
    //     {
    //       label: 'MK14 EBR',
    //       value: '3',
    //     },
    //     {
    //       label: '98 K',
    //       value: '4',
    //     },
    //     {
    //       label: 'M24',
    //       value: '5',
    //     },
    //     {
    //       label: 'AWM',
    //       value: '6',
    //     }],
    // },
    // {
    //   value: '2',
    //   label: '突击步枪',
    //   children: [
    //     {
    //       label: 'AKM',
    //       value: '1',
    //     },
    //     {
    //       label: 'M416',
    //       value: '2',
    //       disabled: true,
    //     },
    //     {
    //       label: 'M416A',
    //       value: '3',
    //     },
    //     {
    //       label: 'SCAR-L',
    //       value: '4',
    //     },
    //     {
    //       label: 'GROZA',
    //       value: '5',
    //     }],
    // },
    // {
    //   value: '3',
    //   label: '冲锋枪',
    //   children: [
    //     {
    //       label: 'MICRO UZI',
    //       value: '1',
    //     },
    //     {
    //       label: 'UMP9',
    //       value: '2',
    //     },
    //     {
    //       label: 'KRISS VECTOR',
    //       value: '3',
    //     },
    //     {
    //       label: 'TOMMY GUN',
    //       value: '4',
    //     }],
    // },
    // {
    //   value: '4',
    //   label: '散弹枪',
    //   children: [
    //     {
    //       label: 'S686',
    //       value: '1',
    //     },
    //     {
    //       label: 'S1897',
    //       value: '2',
    //     },
    //     {
    //       label: 'S12K',
    //       value: '3',
    //     }],
    // },
    // {
    //   value: '5',
    //   label: '手枪',
    //   children: [
    //     {
    //       label: 'P18C',
    //       value: '1',
    //     },
    //     {
    //       label: 'P92',
    //       value: '2',
    //     },
    //     {
    //       label: 'P1911',
    //       value: '3',
    //     },
    //     {
    //       label: 'R1895',
    //       value: '4',
    //     }],
    // },
    // {
    //   value: '6',
    //   label: '其他机械',
    //   children: [
    //     {
    //       label: 'M249',
    //       value: '1',
    //     },
    //     {
    //       label: 'CROSSROW',
    //       value: '2',
    //     }],
    // },
    // {
    //   value: '7',
    //   label: '近战武器',
    //   children: [
    //     {
    //       label: '平底锅',
    //       value: '1',
    //     },
    //     {
    //       label: '撬棍',
    //       value: '2',
    //     },
    //     {
    //       label: '弯刀',
    //       value: '3',
    //     },
    //     {
    //       label: '镰刀',
    //       value: '4',
    //     }],
    // },
    // {
    //   value: '8',
    //   label: '投掷武器',
    //   isLeaf: true,
    //   children: [
    //     {
    //       label: '碎片手雷',
    //       value: '1',
    //     },
    //     {
    //       label: '烟雾弹',
    //       value: '2',
    //     },
    //     {
    //       label: '眩晕手雷',
    //       value: '3',
    //     },
    //     {
    //       label: '莫洛托夫鸡尾酒',
    //       value: '4',
    //     },
    //   ],
    // },
  ],
};

const gunfire = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARMS: {
      return {
        ...state,
        gunfire: action.payload,
      }
    }
    default:
      return state;
  }
};

export default gunfire;