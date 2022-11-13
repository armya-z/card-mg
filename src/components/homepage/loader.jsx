import React from "react";
import RingLoader from "react-spinners/RingLoader";
import styled from "styled-components";

const Spiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 50px;
  padding: 20px;
`;
function Loader() {
  return (
    <>
      <Spiner>
        <RingLoader
          color="#0d1f56"
          cssOverride={{}}
          size={100}
        />
      </Spiner>
    </>
  );
}

export default Loader;
