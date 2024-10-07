import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductFive from './ProductFive/ProductFive';
import ProductOne from './ProductOne/ProductOne';
import ProductSix from './ProductSix/ProductSix';
import ProductFour from './ProductFour/ProductFour';
import ProductTwo from './ProductTwo/ProductTwo';
import ProductThree from './ProductThree/ProductThree';
import HomeContainer from './Home/HomeContainer';
import ProductionContainer from './Production/ProductionContainer';
import ContactContainer from './Contact/ContactContainer';
import QuestionaryContainer from './Questionary/QuestionaryContainer';
import ArticleNews from './ArticleNews/ArticleNews';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/contacts' component={ContactContainer} />
        <Route exact path='/production' component={ProductionContainer} />
        <Route exact path='/questionary' component={QuestionaryContainer} />
        <Route exact path='/news/:newsId' component={ArticleNews} />
        <Route exact path='/product1' component={ProductOne} />
        <Route exact path='/product4' component={ProductFour} />
        <Route exact path='/product3' component={ProductThree} />
        <Route exact path='/product2' component={ProductTwo} />
        <Route exact path='/product5' component={ProductFive} />
        <Route exact path='/product6' component={ProductSix} />
        <Redirect exact from='*' to='/' />
      </Switch>
    </main>
  );
};

export default Main;
