import {FormattedMessage} from 'react-intl';


const SectionHeader = (props) => {
    return (
        <header className="section-header mb-20">
            <h2 className="section-header__title fw-bold" style={{color: props.color}}>
                <FormattedMessage id="section.header" defaultMessage={props.title} values={{title: props.title}}/>
            </h2>
        </header>
    )
}

export default SectionHeader;