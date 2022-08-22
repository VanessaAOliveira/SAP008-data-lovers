
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




  
  export const filterStatus = (characters, deadAlive) => {
    const results = characters.filter((item) => {
        if (deadAlive === item.status)
        return item.status === deadAlive
      })
      return results
    };