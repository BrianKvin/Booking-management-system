import useAuth from "../../hooks/useAuth";

const ServicesTable = () => {
  const { services } = useAuth();

  return (
    <table className="table caption-top">
      <caption className="text-white fs-4">Available services</caption>
      <thead>
        <tr>
          <th scope="col">Service</th>
          <th scope="col">Cost</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service) => (
          <tr key={service.id}>
            <td>{service.service}</td>
            <td>{service.cost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServicesTable;
