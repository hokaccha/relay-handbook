import assert from 'power-assert';
import schema from '../../src/getting_started/data/schema';
import { graphql } from 'graphql';

describe('schema', () => {
  it('should return text', () => {
    graphql(schema, '{ text }').then(result => {
      assert(result.data.text === 'Hello Relay!');
    });
  });
});
