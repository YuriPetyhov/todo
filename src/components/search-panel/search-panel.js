import React, {Fragment} from 'react';
import styles from './search-panel.module.scss';
import Filter from '../filter/filter';


const SearchPanel = () => (
    <Fragment>
        <input type="text"
            placeholder="поиск"
            className={styles.searchpanel}  
        />
        <Filter />
    </Fragment>

)

export default SearchPanel;