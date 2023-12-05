type InitialState = {
    count: number;
    draftCount: string | number;
  };


  type ComponentAction = {
    type: string,
    payload: number | string

  }
  
  const initialState: InitialState = {
    count: 0,
    draftCount: 0,
  };
  
  const reducer = (state = initialState, action: ComponentAction) => {
    const { count, draftCount } = state;
  
    if (action.type === 'increment') {
      const newCount = count + 1;
      return { count: newCount, draftCount: newCount };
    }
  
    if (action.type === 'decrement') {
      const newCount = count - 1;
      return { count: newCount, draftCount: newCount };
    }
  
    if (action.type === 'reset') {
      return { count: 0, draftCount: 0 };
    }
  
    if (action.type === 'updateDraftCount') {
      console.log('updateDraftCount');
  
      return { count, draftCount: action.payload };
    }
  
    if (action.type === 'updateCountFromDraft') {
      return { count: Number(draftCount), draftCount };
    }
  
    return state;
  };



  
  export default function Reducer() {
    return (
      <div>Reducer</div>
    )
  }
  