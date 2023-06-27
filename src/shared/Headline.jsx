/* eslint-disable react/prop-types */

const Headline = ({title, subtitle}) => {
    return (
        <div className="text-center mx-auto md:w-2/3 my-16">
            <h2 className="text-4xl font-bold tracking-wide mt-24 mb-5">{title}</h2>
            <div className="divider"></div>
            <p className="text-tertiary text-xl leading-7 md:w-3/4 text-center mx-auto">{subtitle}</p>
        </div>
    );
};

export default Headline;