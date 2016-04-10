import assert from 'power-assert';
import schema from '../data/schema';
import { graphql } from 'graphql';

describe('schema', () => {
  it('should return text', () => {
    return graphql(schema, '{ app { text } }').then(result => {
      assert(result.data.app.text === 'Hello Relay!');
    });
  });
});
