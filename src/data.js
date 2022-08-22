
export const filterOrder = (data) => {
    data.sort(function(a, b) {
        if (a.name < b.name) {
            return -1
        } else {
            return true
        }
    }
    )
  };
  
  export const filterStatus = () => {
    return 'OMG';
  };