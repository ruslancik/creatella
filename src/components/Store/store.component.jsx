import React, { Component } from "react";
import axios from "axios";
import { OrbitSpinner } from 'react-epic-spinners'

import Item  from "../Item/item.component";
import  Ad  from "../ad/ad.component";

//style
import {
  ItemContainer,
  PageContainer,
  LoadingContainer,
  EndCtlg
} from './store.style'


let CurrentItems = [];
let NextItems = [];

class Store extends Component {

    state = {
      CurrentItemsState: [],
      NextItemsState: [],
      endOfResults: false
    };
  

   
  fetchData = (sortMode, nextPage, current, newSearch) => {
    if (newSearch) {
      this.props.reset();
    }

    if (!current && NextItems[1]) {
      CurrentItems.push(...NextItems);
      NextItems = [];
      this.props.toggleLoading(true);
    }

    if (!this.state.endOfResults) {
      axios
        .get("http://localhost:3000/products?_page=" + nextPage + "&_limit=20&_sort=" + sortMode)
        .then(response => {
          if (response.data[1]) {
            response.data.forEach(element => {
          if (element && current) {
                CurrentItems.push(element);
          } else if (element) {
                NextItems.push(element);
              }
            });

          } else {
            CurrentItems.push("end");
            this.setState({ endOfResults: true });
          }
          if (current) {
            this.setState({ CurrentItemsState: CurrentItems });
          } else if (response.data[1]) {
            NextItems.unshift({
              class: "ad",
              src: "http://localhost:3000/ads/?r=" + Math.floor(Math.random() * 1000)
            });
            this.setState({ NextItemsState: NextItems });
          }
          this.props.toggleLoading(false);
        })
        .catch(err => console.log(err));
    }
  }

  componentDidUpdate(prevProps) {
    const{sort, nextPage, newSearch,loading }= this.props;
    if (newSearch) {
      this.setState(
        { endOfResults: false },
        this.fetchData(sort, nextPage, true, newSearch)
      );
      CurrentItems = [];
      NextItems = [];
    }
    if (nextPage !== prevProps.nextPage && loading === false) {
      this.props.toggleLoading(true);
      this.fetchData(
        sort,
        nextPage + 1,
        false,
        newSearch
      );
    }
  }

  componentDidMount() {
    
    const{sort, nextPage, newSearch }= this.props;

    this.fetchData(sort, nextPage, true, newSearch);
    this.fetchData(sort, nextPage + 1, false, newSearch);
  }

  render() {
    const Items = this.state.CurrentItemsState;
    let Elements;
    if (Items[0]) {
      Elements = Items.map(item => {
        if (item === "end") {
          return <EndCtlg key="end">End of Catalogue</EndCtlg>;
        } else if (item.class === "ad") {
          return <Ad src={item.src} class={item.class} key={item.src} />;
        } else {
          return (
            <Item
              id={item.id}
              price={item.price}
              size={item.size}
              date={item.date}
              face={item.face}
              key={item.id}
            />
          );
        }
      });
    }
    return (
      <PageContainer>
        <ItemContainer>
          {Elements}
          {this.props.loading && !this.state.endOfResults && (
            <LoadingContainer>
              <OrbitSpinner color='#FFD700' />
            </LoadingContainer>
          )}
        </ItemContainer>
      </PageContainer>
    );
  }
}

export default Store