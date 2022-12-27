import styled from 'styled-components';

export const Section = styled.section`
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  padding: 20px;
`;

export const MovieInfo = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 5fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Poster = styled.img`
  width: 100%;
  // max-height: 414px;
  object-fit: contain;
  // border: 1px solid black;
`;

export const GoBack = styled.div`
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  weight: 50px;
`;

export const CastGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 3fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
