import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Header.module.css';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/avatar.png';
import { useState } from 'react';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import { useSelector } from 'react-redux';
const Header = () => {
 
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value)
  }

  const { data, isLoading } = useGetProductsQuery({title: searchValue});
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt='Astana'/>
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div className={styles.avatar}
          style={{backgroundImage:`url(${AVATAR})`}}
          />
          <div className={styles.username}>Guest</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}/>
            </svg>
          </div>
          <div className={styles.input}>
            <input type='search' name='search'
            placeholder='Поиск'
            autoComplete='off'
            onChange={handleSearch}
            value={searchValue}
            />
          </div>

          {searchValue && <div className={styles.box}>
            {isLoading ? 'Loading': !data.length ? 'No results' : (
              data.map(({ title, images, id }) => {
                return (
                  <Link 
                  key={id}
                   onClick={()=> setSearchValue('')}
                   className={styles.item} 
                   to={`/products/${id}`}>

                    <div className={styles.image} 
                    style={{backgroundImage:`url(${images[0]})`}}/>
                    <div className={styles.title}>{title}</div>
                  </Link>
                )
              })
            )}
            </div>}
        </form>

        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <svg className={styles['icon-fav']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}/>
            </svg>
          </Link>

          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles['icon-cart']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}/>
            </svg>
            <span className={styles.count}></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header