class A
  def initialize(var1, var2)
    @var1 = var1
    @var2 = var2 = 11
  end

  def meth
    p @var1
    p @var2    
  end
end

a = A.new(1,2)
a.meth

p "sdfsdfsdf"