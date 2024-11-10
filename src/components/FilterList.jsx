import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const FilterList = () => {
  return (
    <div>
      <h5>Search By Hotel Name / City</h5>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      {/* <h6>price per a night</h6> */}
      <h6 style={{ marginTop: 20, marginBottom: 10 }}>price per a night</h6>
      <div className="form-check" style={{ width: "250px", marginBottom: 10 }}>
        <input
          className="form-check-input"
          type="checkbox"
          id="all"
          style={{ width: 25, height: 23, border: "1px solid #589ded" }}
        />
        <label
          className="form-check-label"
          htmlFor="all"
          style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
        >
          less than $70
        </label>
      </div>

      <div className="form-check" style={{ width: "250px", marginBottom: 10 }}>
        <input
          className="form-check-input"
          type="checkbox"
          id="all"
          style={{ width: 25, height: 23, border: "1px solid #589ded" }}
        />
        <label
          className="form-check-label"
          htmlFor="all"
          style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
        >
          from 70 to 125
        </label>
      </div>

      <div className="form-check" style={{ width: "250px", marginBottom: 10 }}>
        <input
          className="form-check-input"
          type="checkbox"
          id="all"
          style={{ width: 25, height: 23, border: "1px solid #589ded" }}
        />
        <label
          className="form-check-label"
          htmlFor="all"
          style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
        >
          125 to 200
        </label>
      </div>

      <div className="form-check" style={{ width: "250px", marginBottom: 10 }}>
        <input
          className="form-check-input"
          type="checkbox"
          id="all"
          style={{ width: 25, height: 23, border: "1px solid #589ded" }}
        />
        <label
          className="form-check-label"
          htmlFor="all"
          style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
        >
          201 to 299
        </label>
      </div>

      {/* test */}

      {/* ratings */}
      <h6 style={{ marginTop: 20, marginBottom: 20 }}>Ratings</h6>
      <div className="d-flex">
        <div style={{ width: 20, border: "2px solid blue", padding: 10 }}>
          1
        </div>
        <div style={{ width: 20, border: "2px solid blue", padding: 10 }}>
          2
        </div>
        <div style={{ width: 20, border: "2px solid blue", padding: 10 }}>
          3
        </div>
        <div style={{ width: 20, border: "2px solid blue", padding: 10 }}>
          4
        </div>
        <div style={{ width: 20, border: "2px solid blue", padding: 10 }}>
          5
        </div>
      </div>
    </div>
  );
};

export default FilterList;
