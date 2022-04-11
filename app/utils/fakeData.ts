import {MessageStatus} from '../../types';

export const fakeData = [
  {
    id: '1',
    text: 'yo',
    author: {id: '001', username: 'You'},
    status: MessageStatus.DELIVERED,
    createdAt: Date.now().toString(),
  },
  {
    id: '2',
    text: 'sup',
    author: {id: '002', username: 'Bob'},
    status: MessageStatus.DELIVERED,
    createdAt: Date.now().toString(),
  },
];
