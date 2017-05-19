import {
  getItems,
  selectItem,
  newItem,
  GET_ITEMS,
  SELECT_ITEM,
  NEW_ITEM,
} from '../../src/actions';

describe('getItems', () => {
  it('should return an object with the type GET_ITEMS', () => {
    const action = getItems();
    expect(action.type).toBe(GET_ITEMS);
  });

  it('should return a promise', () => {
    const action = getItems();
    expect(typeof action.payload.then).toBe('function'))
  });
});

describe('selectedItem', () => {
  it('should return an object with the type SELECT_ITEM', () => {
    const action = selectedItem();
    expect(action.type).toBe('SELECT_ITEM'))
  });

  it('should return a promise', () => {
    const action = selectedItem();
    expect(typeof action.payload.then).toBe('function'))
  });
});

describe('newItem', () => {
  it('should return an object with the type NEW_ITEM', () => {
    const action = newItem();
    expect(action.type).toBe('NEW_ITEM'))
  });

  it('should return a promise', () => {
    const action = newItem();
    expect(typeof action.payload.then).toBe('function'))
  });
});
