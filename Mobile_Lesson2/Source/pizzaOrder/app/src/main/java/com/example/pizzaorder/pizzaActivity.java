package com.example.pizzaorder;
import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class pizzaActivity extends AppCompatActivity {
    TextView tvView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_pizza );
        tvView = (TextView) findViewById(R.id.pizzaTxt);

        Intent intent = getIntent();

        String message = intent.getStringExtra("mes");
        tvView.setText("Your order summary is: " + message);
    }



    public void reuse(View view)
    {
        Intent redirect = new Intent(pizzaActivity.this,MainActivity.class);
        startActivity(redirect);
    }
}
