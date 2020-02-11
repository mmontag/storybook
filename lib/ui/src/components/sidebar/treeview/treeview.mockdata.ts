import { State } from '@storybook/api';

type MockDataSet = Record<string, State['storiesHash']>;

export const mockDataset: MockDataSet = {
  withRoot: {
    '1': {
      isRoot: true,
      isLeaf: false,
      isComponent: false,
      children: ['1-11', '1-12'],
      depth: 0,
      id: '1',
      name: 'Root 1',
    },
    '2': {
      isRoot: false,
      isLeaf: false,
      isComponent: false,
      children: ['2-21', '2-22'],
      depth: 0,
      id: '2',
      name: 'Group 1',
    },
    '1-11': {
      isRoot: false,
      isLeaf: false,
      isComponent: true,
      id: '1-11',
      parent: '1',
      depth: 1,
      name: 'Child A1',
      children: [],
    },
    '1-12-121': {
      isRoot: false,
      isLeaf: true,
      isComponent: false,
      id: '1-12-121',
      parent: '1-12',
      depth: 2,
      name: 'GrandChild A1.1',
      kind: '',
    },
    '1-12-122': {
      isRoot: false,
      isLeaf: true,
      isComponent: false,
      id: '1-12-122',
      parent: '1-12',
      depth: 2,
      name: 'GrandChild A1.2',
      kind: '',
    },
    '1-12': {
      isRoot: false,
      isLeaf: false,
      isComponent: true,
      id: '1-12',
      name: 'Child A2',
      depth: 1,
      children: ['1-12-121', '1-12-122'],
      parent: '1',
    },
    '2-21': {
      isRoot: false,
      isLeaf: true,
      isComponent: false,
      id: '2-21',
      depth: 1,
      name: 'Child B1',
      parent: '2',
      kind: '',
    },
    '2-22': {
      isRoot: false,
      isLeaf: true,
      isComponent: false,
      id: '2-22',
      depth: 1,
      name: 'Child B2',
      parent: '2',
      kind: '',
    },
    '3': {
      isRoot: true,
      isLeaf: false,
      isComponent: false,
      children: ['3-31', '3-32'],
      depth: 0,
      id: '3',
      name: 'Root 3',
    },
    '3-31': {
      isRoot: false,
      isLeaf: true,
      isComponent: false,
      id: '3-31',
      depth: 1,
      name: 'Child A1',
      parent: '3',
      kind: '',
    },
    '3-32': {
      isRoot: false,
      isLeaf: false,
      isComponent: true,
      id: '3-32',
      name: 'Child A2',
      depth: 1,
      children: ['3-32-321', '3-32-322'],
      parent: '3',
    },
    '3-32-321': {
      isRoot: false,
      isLeaf: true,
      isComponent: false,
      id: '3-32-321',
      depth: 2,
      name: 'GrandChild A1.1',
      parent: '3-32',
      kind: '',
    },
    '3-32-322': {
      isRoot: false,
      isLeaf: true,
      isComponent: false,
      id: '3-32-322',
      depth: 2,
      name: 'GrandChild A1.2',
      parent: '3-32',
      kind: '',
    },
  },
  noRoot: {
    '1': {
      children: ['1-11', '1-12'],
      isRoot: false,
      isComponent: false,
      isLeaf: false,
      depth: 0,
      id: '1',
      name: 'Parent A',
    },
    '2': {
      children: ['2-21', '2-22'],
      isRoot: false,
      isComponent: true,
      isLeaf: false,
      depth: 0,
      id: '2',
      name: 'Parent B',
    },
    '1-11': {
      id: '1-11',
      depth: 1,
      name: 'Child A1',
      isLeaf: true,
      isComponent: false,
      isRoot: false,
      parent: '1',
      kind: '',
    },
    '1-12-121': {
      id: '1-12-121',
      depth: 2,
      name: 'GrandChild A1.1',
      isLeaf: true,
      isComponent: false,
      isRoot: false,
      parent: '1-12',
      kind: '',
    },
    '1-12-122': {
      id: '1-12-122',
      depth: 2,
      name: 'GrandChild A1.2',
      isLeaf: true,
      isComponent: false,
      isRoot: false,
      parent: '1-12',
      kind: '',
    },
    '1-12': {
      id: '1-12',
      name: 'Child A2',
      depth: 1,
      children: ['1-12-121', '1-12-122'],
      isRoot: false,
      isComponent: true,
      isLeaf: false,
      parent: '1',
    },
    '2-21': {
      id: '2-21',
      depth: 1,
      name: 'Child B1',
      isLeaf: true,
      isComponent: false,
      isRoot: false,
      parent: '2',
      kind: '',
    },
    '2-22': {
      id: '2-22',
      depth: 1,
      name: 'Child B2',
      isLeaf: true,
      isComponent: false,
      isRoot: false,
      parent: '2',
      kind: '',
    },
  },
};

export const mockSelected = {
  withRoot: {
    '1': false,
    '2': false,
    '1-11': false,
    '1-12-121': false,
    '1-12-122': false,
    '1-12': false,
    '2-21': false,
    '2-22': false,
    '3': false,
    '3-31': false,
    '3-32': false,
    '3-32-321': false,
    '3-32-322': false,
  },
  noRoot: {
    '1': false,
    '2': false,
    '1-11': false,
    '1-12-121': false,
    '1-12-122': false,
    '1-12': false,
    '2-21': false,
    '2-22': false,
  },
};

export const mockExpanded = {
  withRoot: {
    '1': true,
    '2': false,
    '1-11': true,
    '1-12-121': false,
    '1-12-122': false,
    '1-12': false,
    '2-21': false,
    '2-22': false,
    '3': false,
    '3-31': false,
    '3-32': false,
    '3-32-321': false,
    '3-32-322': false,
  },
  noRoot: {
    '1': true,
    '2': false,
    '1-11': true,
    '1-12-121': false,
    '1-12-122': false,
    '1-12': false,
    '2-21': false,
    '2-22': false,
  },
  noRootSecond: {
    '1': true,
    '2': false,
    '1-11': true,
    '1-12-121': true,
    '1-12-122': true,
    '1-12': true,
    '2-21': false,
    '2-22': false,
  },
};
