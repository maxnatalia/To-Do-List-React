const Container = ({ title, body, extraContent }) => (
    <div className="container">
        <div className="container__title--buttons">
            <h2 className="container__title--header">{title}</h2>
            {extraContent}
        </div>
        {body}
    </div>
);

export default Container;