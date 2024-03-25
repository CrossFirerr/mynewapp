const HeadLine = () => {
  return (
    <>
      <h1>Hellow there</h1>
      <hr />
    </>
  );
};

export const News = ({ title }) => {
  return (
    <>
      <h4>{title}</h4>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum iure
        vitae, vero placeat aliquid praesentium enim quae commodi iste culpa
        inventore, voluptatem sequi natus nemo ad aut eius quisquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat
        nam voluptatem facilis, cum alias id ad aliquam accusantium nisi saepe
        quisquam, molestias minus enim ea commodi aspernatur quia velit.
      </p>
    </>
  );
};

export default HeadLine;
