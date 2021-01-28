// Session: 2016.05
// adapter模式 Created by wxc on 2019/10/23

import java.util.*;

class Address {
    public void street() {
        // 代码省略
    }

    public void zip() {
        // 代码省略
    }

    public void city() {
        // 代码省略
    }

    // 其它成员省略
}

class DutchAddress {
    public void straat() {
        // 代码省略
    }

    public void postcode() {
        // 代码省略
    }

    public void plaats() {
        // 代码省略
    }

    // 其它成员省略
}

class DutchAddressAdapter extends DutchAddress {
    // 1
    private Address address;
    public DutchAddressAdapter(Address addr) {
        address = addr;
    }

    public void straat() {
        // 2
        DutchAddress.street();
    }

    public void postcode() {
        // 3
        DutchAddress.zip();
    }

    public void plaats() {
        // 4
        DutchAddress.city();
    }

    // 其它成员省略
}

class Test16_05 {
    public static void main(String args) {
        Address addr = new Address();
        // 5
        DutchAddressAdapter addrAdapter = new DutchAddressAdapter(addr);

        System.out.println("\n The DutchAddress\n");
        testDutch(addrAdapter);
    }

    static void testDutch(DutchAddress addr) {
        addr.straat();
        addr.postcode();
        addr.plaats();
    }
}

