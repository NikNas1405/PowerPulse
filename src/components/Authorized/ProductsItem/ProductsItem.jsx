export const ProductsItem = ({ type, name, calories, category, weight }) => {
  return (
    <div>
      <span>DIET</span>
      <div>
        <svg>
          <use></use>
        </svg>
        <p>{type}</p>
      </div>
      <button>
        Add
        <svg>
          <use></use>
        </svg>
      </button>

      <svg>
        <use></use>
      </svg>
      <p>{name}</p>
      <div>
        <span>Calories: </span>
        <p>{calories}</p>
      </div>
      <div>
        <span>Category: </span>
        <p>{category}</p>
      </div>
      <div>
        <span>Weight: </span>
        <p>{weight}</p>
      </div>
    </div>
  );
};
