export default {
  error: 'there should be at least one parent with a kid named Timmy',
  errorEach: [
    {
      $age: {
        error: null,
      },
      $kids: {
        error: null,
        errorEach: [
          {
            $age: {
              error: 'is null but should be able to coerce to Number',
            },
            $name: {
              error: null,
            },
            error: null,
          },
        ],
      },
      $name: {
        error: 'is null but should be of type String',
      },
      error: null,
    },
    {
      $age: {
        error: null,
      },
      $kids: {
        error: null,
        errorEach: [
          {
            $age: {
              error: null,
            },
            $name: {
              error: null,
            },
            error: null,
          },
          {
            $age: {
              error: 'is undefined but should be able to coerce to Number',
            },
            $name: {
              error: 'is null but should be of type String',
            },
            error: null,
          },
        ],
      },
      $name: {
        error: null,
      },
      error: null,
    },
  ],
}
