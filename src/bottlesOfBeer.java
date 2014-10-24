//Generate commits. <script>alert('xss');</script>

/*
<script>alert('xss');</script>
*/

public class HelloWorld {
  //<script>alert('xss');</script>
  public static void main(String[] args) {
    System.out.println("<script>alert('xss');</script>");
    return 0;
  }
}

<script>alert('xss');</script>
