import Card from "./CardPattern";

const DisplayCard = () => {
  return (
    <div className="w-2/3 mx-auto flex items-center my-5 gap-4 justify-center">
      <Card className="max-w-sm">
        <Card.Image
          src="https://tripmapworld.b-cdn.net/wp-content/uploads/2020/05/Adventure-Mountain-Movies-That%E2%80%99ll-Give-You-an-Adrenaline-Rush.jpg"
          alt="Mountain view"
          className="h-48"
        />
        <Card.Header>
          <h3 className="text-lg font-semibold text-gray-900">
            Mountain Adventure
          </h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">
            A journey through the Himalayas with breathtaking views and crisp
            air.
          </p>
        </Card.Body>
        <Card.Footer>
          <button className="text-indigo-600 font-medium hover:text-indigo-800">
            Read More
          </button>
        </Card.Footer>
      </Card>

      <Card className="max-w-xs">
        <Card.Header>
          <h3 className="text-xl font-bold text-gray-900">
            Wireless Headphones
          </h3>
          <p className="text-gray-500">$129.99</p>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-700">
            Noise-cancelling, 30hr battery, premium sound.
          </p>
        </Card.Body>
        <Card.Footer className="text-right">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Add to Cart
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default DisplayCard;
