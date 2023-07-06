function ft_print_reverse_alphabet() {
    for (let c = 'z'.charCodeAt(); c >= 'a'.charCodeAt(); c--) {
      console.log(String.fromCharCode(c));
    }
  }
  
  ft_print_reverse_alphabet();
  