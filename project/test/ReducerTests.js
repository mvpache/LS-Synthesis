import ItemsReducer, SelectedItemReducer from '../../src/reducers';
import {
  GET_ITEMS,
  SELECT_ITEM,
  NEW_ITEM,
} from '../../src/actions';

describe('ItemsReducer', () => {
  it('should return an empty array by default', () => {
    expect(ItemsReducer(undefined, { type: '@@@@@@' })).toEqual([]);
  });
  it('should add the payload to the provided array', () => {
    const cans = [];
    const action = {
      type: NEW_ITEM,
      payload: {
        text: 'add me',
      },
    };
    expect(ItemsReducer(cans, action)).toEqual([
      {
        text: 'add me',
      }
    ]);
  })
  it('should not mutate the orignal array', () => {
    const cans = [];
    const action = {
      type: NEW_ITEM,
      payload: {
        text: 'add me',
      },
    };
    ItemsReducer(cans, action);
    expect(cans).toEqual([];)
  });
});
