import styles from './Search.module.scss'
import Proper from '../../Proper';

function SearchRender({ list, searchValue, onclick }) {
  const listResultRender = (list, value) => {
    if (list.length > 0 && value) {
      return (
          <div className={styles['search-list']}>         
          {list.map((result, index) => {
            return (
              <Proper onclick={onclick} key={index} data={result} searchValue={result.name} avatar={result.avatar} />
            );
          })}
          <p className={styles['show-result']}>View all results for "{value}"</p>
          </div>
      );
    }
  }

  return (
      <>
        {listResultRender(list, searchValue)}
      </>
  );
}

export default SearchRender;